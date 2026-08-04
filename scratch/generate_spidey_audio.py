import numpy as np
import scipy.io.wavfile as wav
import os

sample_rate = 44100

def generate_square_wave(freq, duration, sample_rate=44100, volume=0.3):
    t = np.linspace(0, duration, int(sample_rate * duration), False)
    # Square wave with harmonics for 8-bit synth sound
    wave = np.sign(np.sin(2 * np.pi * freq * t))
    # Soften edges slightly to remove harsh clicks
    window = np.ones_like(wave)
    fade_len = int(sample_rate * 0.01)
    if fade_len > 0 and len(wave) > 2 * fade_len:
        window[:fade_len] = np.linspace(0, 1, fade_len)
        window[-fade_len:] = np.linspace(1, 0, fade_len)
    return wave * window * volume

def generate_brass_wave(freq, duration, sample_rate=44100, volume=0.4):
    t = np.linspace(0, duration, int(sample_rate * duration), False)
    # Fundamental + 2nd, 3rd, 4th harmonics for brass/organ feel
    wave = (0.5 * np.sin(2 * np.pi * freq * t) +
            0.3 * np.sin(2 * np.pi * freq * 2 * t) +
            0.15 * np.sin(2 * np.pi * freq * 3 * t) +
            0.05 * np.sin(2 * np.pi * freq * 4 * t))
    # Envelope (quick attack, slight decay)
    envelope = np.exp(-t * 1.5)
    fade_len = int(sample_rate * 0.005)
    if fade_len > 0 and len(wave) > 2 * fade_len:
        envelope[:fade_len] = np.linspace(0, 1, fade_len)
        envelope[-fade_len:] = np.linspace(envelope[-fade_len], 0, fade_len)
    return wave * envelope * volume

def generate_thwip_sfx(duration=0.18, sample_rate=44100, volume=0.5):
    # Web shooter "THWIP!" sfx: fast frequency sweep down with white noise burst
    t = np.linspace(0, duration, int(sample_rate * duration), False)
    freq_sweep = np.exp(np.linspace(np.log(2400), np.log(300), len(t)))
    phase = 2 * np.pi * np.cumsum(freq_sweep) / sample_rate
    tone = np.sin(phase)
    noise = np.random.uniform(-1, 1, len(t))
    env = np.exp(-t * 22)
    sfx = (0.6 * tone + 0.4 * noise) * env * volume
    return sfx

# Musical note frequencies in Hz
NOTE_FREQS = {
    'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
    'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
    'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'REST': 0
}

bpm = 135
beat_dur = 60.0 / bpm
eighth_dur = beat_dur / 2.0

# Iconic 60s Spider-Man Theme Riff & Melody
# "Spider-Man, Spider-Man, does whatever a spider can!"
melody = [
    # Intro Riff (Na-na-na-na-na-na-na-na!)
    ('E3', eighth_dur), ('E3', eighth_dur), ('G3', eighth_dur), ('E3', eighth_dur),
    ('A3', eighth_dur), ('E3', eighth_dur), ('A#3', eighth_dur), ('A3', eighth_dur),
    ('E3', eighth_dur), ('E3', eighth_dur), ('G3', eighth_dur), ('E3', eighth_dur),
    ('A3', eighth_dur), ('E3', eighth_dur), ('A#3', eighth_dur), ('A3', eighth_dur),

    # Main Theme: "Spider-Man, Spider-Man..."
    ('E4', beat_dur), ('G4', beat_dur), ('A4', beat_dur * 1.5), ('REST', eighth_dur),
    ('E4', beat_dur), ('G4', beat_dur), ('A4', beat_dur * 1.5), ('REST', eighth_dur),
    ('E4', beat_dur), ('G4', beat_dur), ('A4', eighth_dur), ('C5', eighth_dur), ('B4', beat_dur), ('A4', beat_dur),
    ('G4', beat_dur), ('E4', beat_dur * 2),

    # "Spins a web, any size... Catches thieves just like flies!"
    ('A4', beat_dur), ('C5', beat_dur), ('D5', beat_dur * 1.5), ('REST', eighth_dur),
    ('A4', beat_dur), ('C5', beat_dur), ('D5', beat_dur * 1.5), ('REST', eighth_dur),
    ('E4', beat_dur), ('G4', beat_dur), ('A4', beat_dur), ('C5', beat_dur),
    ('B4', beat_dur), ('A4', beat_dur), ('G4', beat_dur * 2),

    # "Look out! Here comes the Spider-Man!"
    ('B4', beat_dur), ('B4', beat_dur), ('C5', beat_dur), ('D5', beat_dur),
    ('E5', beat_dur * 1.5), ('REST', eighth_dur), ('D5', beat_dur), ('C5', beat_dur),
    ('A4', beat_dur * 3), ('REST', beat_dur)
]

audio_segments = []

for note, dur in melody:
    freq = NOTE_FREQS.get(note, 0)
    if freq == 0:
        segment = np.zeros(int(sample_rate * dur))
    else:
        segment = generate_brass_wave(freq, dur, sample_rate, volume=0.35)
        # Add THWIP sfx at high energy notes (C5/D5/E5)
        if note in ['C5', 'D5', 'E5'] and dur >= beat_dur:
            thwip = generate_thwip_sfx(0.15, sample_rate, volume=0.4)
            if len(thwip) <= len(segment):
                segment[:len(thwip)] += thwip
    audio_segments.append(segment)

full_loop = np.concatenate(audio_segments)

# Target duration: 36 seconds
target_duration = 36.0
target_length = int(sample_rate * target_duration)
repeated_audio = np.tile(full_loop, int(np.ceil(target_length / len(full_loop))))[:target_length]

# Normalize and convert to 16-bit PCM WAV
repeated_audio = repeated_audio / np.max(np.abs(repeated_audio)) * 0.85
audio_int16 = (repeated_audio * 32767).astype(np.int16)

# Dual-channel stereo
stereo_audio = np.column_stack((audio_int16, audio_int16))

output_wav = r'C:\Users\MSI SHOP ID\Videos\Promotion\spiderman_theme.wav'
wav.write(output_wav, sample_rate, stereo_audio)
print(f"Generated Spider-Man theme audio at {output_wav}")

import imageio_ffmpeg
import subprocess
import os

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
video_dir = r"C:\Users\MSI SHOP ID\Videos\Promotion"
input_video = os.path.join(video_dir, "Promote MySelf.mp4")
input_audio = os.path.join(video_dir, "spiderman_theme.wav")

output_mixed = os.path.join(video_dir, "Promote_MySelf_Spiderman_Mixed.mp4")
output_replaced = os.path.join(video_dir, "Promote_MySelf_Spiderman_Theme.mp4")

print(f"Using FFmpeg: {ffmpeg}")
print("Processing Version 1: Mixed Audio (Original Video Audio + Spider-Man Theme Music)...")

cmd_mixed = [
    ffmpeg, "-y",
    "-i", input_video,
    "-i", input_audio,
    "-filter_complex", "[0:a]volume=0.8[a0];[1:a]volume=0.6[a1];[a0][a1]amix=inputs=2:duration=first[aout]",
    "-map", "0:v",
    "-map", "[aout]",
    "-c:v", "copy",
    "-c:a", "aac",
    "-b:a", "192k",
    output_mixed
]

res1 = subprocess.run(cmd_mixed, capture_output=True, text=True)
if res1.returncode == 0:
    print(f"SUCCESS: Created Mixed Audio Video at:\n  {output_mixed}")
else:
    print(f"Error in mixed processing:\n{res1.stderr}")

print("Processing Version 2: Replaced Audio (Spider-Man Theme Music Only)...")

cmd_replaced = [
    ffmpeg, "-y",
    "-i", input_video,
    "-i", input_audio,
    "-map", "0:v",
    "-map", "1:a",
    "-c:v", "copy",
    "-c:a", "aac",
    "-b:a", "192k",
    "-shortest",
    output_replaced
]

res2 = subprocess.run(cmd_replaced, capture_output=True, text=True)
if res2.returncode == 0:
    print(f"SUCCESS: Created Audio-Replaced Video at:\n  {output_replaced}")
else:
    print(f"Error in replaced processing:\n{res2.stderr}")

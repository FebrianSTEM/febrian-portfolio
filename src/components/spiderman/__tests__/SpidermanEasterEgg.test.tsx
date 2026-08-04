import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { SpidermanEasterEgg } from '../../SpidermanEasterEgg';

describe('SpidermanEasterEgg Component', () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: new Date('2026-08-04T12:00:00+07:00') });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders swinging Spidey initially before expiration', () => {
    render(<SpidermanEasterEgg />);
    expect(screen.getByText(/CATCH SPIDEY!/i)).toBeDefined();
  });

  it('transitions state to caught and launches modal when Spidey is caught', async () => {
    render(<SpidermanEasterEgg />);
    const catchTarget = screen.getByText(/CATCH SPIDEY!/i);

    act(() => {
      fireEvent.click(catchTarget);
    });

    // Advance fake timers by 650ms for catch explosion timeout
    act(() => {
      vi.advanceTimersByTime(700);
    });

    expect(screen.getByText(/SPIDER-MAN: BRAND NEW DAY/i)).toBeDefined();
    expect(screen.getByRole('heading', { name: /You caught Spider-Man!/i })).toBeDefined();
  });

  it('returns null if component is rendered past expiration date', () => {
    vi.setSystemTime(new Date('2026-09-03T12:00:00+07:00'));
    const { container } = render(<SpidermanEasterEgg />);
    expect(container.firstChild).toBeNull();
  });
});

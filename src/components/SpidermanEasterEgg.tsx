import React, { useState, useEffect } from 'react';
import { SpidermanSwinger } from './spiderman/SpidermanSwinger';
import { SpidermanModal } from './spiderman/SpidermanModal';
import { SpidermanHanging } from './spiderman/SpidermanHanging';

export type SpidermanState = 'swinging' | 'caught' | 'hanging';

// Expiration date set to 1 month from creation (September 2, 2026 23:59:59 local time)
const EXPIRATION_DATE = new Date('2026-09-02T23:59:59+07:00');

export const SpidermanEasterEgg: React.FC = () => {
  const [gameState, setGameState] = useState<SpidermanState>('swinging');
  const [isExpired, setIsExpired] = useState<boolean>(false);

  // Check expiration date on mount
  useEffect(() => {
    if (new Date() > EXPIRATION_DATE) {
      setIsExpired(true);
    }
  }, []);

  if (isExpired) {
    return null;
  }

  const handleCatch = () => {
    setGameState('caught');
  };

  const handleCloseModal = () => {
    setGameState('hanging');
  };

  return (
    <>
      {/* State 1: Active Swinging */}
      {gameState === 'swinging' && <SpidermanSwinger onCatch={handleCatch} />}

      {/* State 2: Caught Mask Modal */}
      <SpidermanModal isOpen={gameState === 'caught'} onClose={handleCloseModal} />

      {/* State 3: Hanging Upside Down Background Guardian */}
      {gameState === 'hanging' && <SpidermanHanging />}
    </>
  );
};

export default SpidermanEasterEgg;

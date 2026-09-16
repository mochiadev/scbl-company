import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const KenBurnsHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Calculate transitions
  const image1Duration = fps * 5; // 5 seconds
  const transitionDuration = fps * 1; // 1 second crossfade
  const image2Start = image1Duration;
  const image2Duration = fps * 5; // 5 seconds
  const image3Start = image2Start + image2Duration;

  // Image 1: Slow zoom in (scale 1.0 -> 1.15)
  const scale1 = interpolate(
    frame,
    [0, image1Duration],
    [1.0, 1.15],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Image 1 opacity (fade out during transition)
  const opacity1 = interpolate(
    frame,
    [image1Duration - transitionDuration, image1Duration],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Image 2: Slow pan right (translateX 0 -> -150px)
  const translateX2 = interpolate(
    frame,
    [image2Start, image2Start + image2Duration],
    [0, -150],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Image 2 opacity (fade in, then fade out)
  const opacity2 = interpolate(
    frame,
    [
      image2Start - transitionDuration,
      image2Start,
      image3Start - transitionDuration,
      image3Start,
    ],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Image 3: Slow zoom out (scale 1.2 -> 1.0)
  const scale3 = interpolate(
    frame,
    [image3Start, durationInFrames],
    [1.2, 1.0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Image 3 opacity (fade in at end)
  const opacity3 = interpolate(
    frame,
    [image3Start - transitionDuration, image3Start],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: '#050C16' }}>
      {/* Image 1 - Zoom In */}
      <AbsoluteFill
        style={{
          opacity: opacity1,
          transform: `scale(${scale1})`,
        }}
      >
        <Img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AbsoluteFill>

      {/* Image 2 - Pan Right */}
      <AbsoluteFill
        style={{
          opacity: opacity2,
          transform: `translateX(${translateX2}px) scale(1.1)`,
        }}
      >
        <Img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AbsoluteFill>

      {/* Image 3 - Zoom Out */}
      <AbsoluteFill
        style={{
          opacity: opacity3,
          transform: `scale(${scale3})`,
        }}
      >
        <Img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

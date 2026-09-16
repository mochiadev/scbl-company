import { Composition } from 'remotion';
import { KenBurnsHero } from './KenBurnsHero';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KenBurnsHero"
        component={KenBurnsHero}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

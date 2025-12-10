import React, { Suspense } from 'react';
import s from './styles.module.scss';
import { AboutDrone } from '@Components/AboutDrone';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const About = () => {
  
  return (
    <section className={s.home__about}>
      <div className={`${s.about__main} container grid grid-cols-12`}>
        <div className={`${s.about__main_subtitle} txt-med`}>ABOUT OUR DRONE</div>
        <div className={s.about__main_content}>
          <h4 className={`${s.about__main_title} txt-light`}>What is Our Drone?</h4>
          <p className={`${s.about__main_txt} txt-light`}>
            Our drones are designed for professionals, hobbyists, and adventurers alike. Whether you
            need stunning aerial photography, precision mapping, or high-speed racing, our advanced
            drones deliver cutting-edge performance with ease.
          </p>
        </div>
      </div>

      <div className={s.home__about_model}>
        {/* <Canvas shadows camera={{ position: [0, 5, 6], fov: 25, near: 0.1, far: 100 }}>
          <Suspense fallback={null}>
            <directionalLight
              position={[-2, 2, 1]}
              castShadow
              shadow-mapSize-width={256}
              intensity={2}
              shadow-bias={-0.0001}
            />
            <Environment preset="warehouse" environmentIntensity={0.8} />
            <AboutDrone />
          </Suspense>
        </Canvas> */}
      </div>
    </section>
  );
};

export default About;

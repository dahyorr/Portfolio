"use client"
import React, { useEffect, useState } from 'react'
import { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"
import particlesOptions from '../../../helpers/particles'

type Props = {}

const ParticleBackground = (props: Props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) return (
    <Particles
      id="landing-background"
      options={particlesOptions as ISourceOptions}
    />
  );
  return null;
}

export default ParticleBackground
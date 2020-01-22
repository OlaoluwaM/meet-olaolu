// export const params = {
//   particles: {
//     number: {
//       value: 160,
//       density: {
//         enable: false,
//       },
//     },
//     color: {
//       value: '#000000',
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: {
//         speed: 6,
//         size_min: 0.3,
//       },
//     },
//     line_linked: {
//       enable: false,
//     },
//     move: {
//       random: true,
//       speed: 1,
//       direction: 'top',
//       out_mode: 'out',
//     },
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: 'bubble',
//       },
//       onclick: {
//         enable: true,
//         mode: 'repulse',
//       },
//     },
//     modes: {
//       bubble: {
//         distance: 250,
//         duration: 2,
//         size: 0,
//         opacity: 0,
//       },
//       repulse: {
//         distance: 400,
//         duration: 4,
//       },
//     },
//   },
// };

export const params = {
  particles: {
    number: {
      value: 142,
      density: {
        enable: true,
        value_area: 947.0220103698913,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4.005992965476349,
      random: true,
      anim: {
        enable: false,
        speed: 19.476567255021315,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 176.26369048095938,
      color: '#ffffff',
      opacity: 0.16023971861905398,
      width: 1.2819177489524316,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

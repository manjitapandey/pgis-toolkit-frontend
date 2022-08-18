import SVGInjector from 'svg-injector';
import memoize from 'memoize-one';

// const getSvgImageIcon = async (src, fillColor) => {
//   const onImageLoad = memoize(async () => {
//     const width = 500;
//     const height = 500;
//     const dummySvg = document.createElement('svg');
//     const container = document.createElement('div');
//     dummySvg.setAttribute('data-src', src);
//     container.appendChild(dummySvg);
//     const options = {};
//     let finalTargetImage = null;
//     await new Promise((resolve) => {
//       SVGInjector(dummySvg, options, () => {
//         const svg = container.children[0];
//         svg.style.width = `${width}px`;
//         svg.style.height = `${height}px`;
//         if (fillColor) {
//           // svg.style.fill = fillColor;
//           // const paths = svg.getElementsByTagName('path');
//           // for (let i = 0; i < paths.length; i += 1) {
//           //   paths[i].style.fill = fillColor;
//           // }
//           const svgns = src;
//           // variable for the namespace
//           const newRect = document.createElementNS(svgns, 'circle');
//           newRect.setAttribute('x', '0');
//           newRect.setAttribute('y', '0');
//           // newRect.setAttribute('width', svg.width.animVal.value);
//           // newRect.setAttribute('height', svg.height.animVal.value);
//           newRect.setAttribute('fill', fillColor);
//           newRect.setAttribute('r', svg.width.animVal.value / 2);
//           newRect.setAttribute(
//             'transform',
//             `translate(${svg.width.animVal.value / 2},${svg.height.animVal.value / 2})`,
//           );
//           // svg.appendChild(newRect);
//           svg.insertBefore(newRect, svg.firstChild);

//           // circle.style.fill = fillColor;
//         }
//         const getString = (() => {
//           const DIV = document.createElement('div');
//           if ('outerHTML' in DIV) return (node) => node.outerHTML;
//           return (node) => {
//             const div = DIV.cloneNode();
//             div.appendChild(node.cloneNode(true));
//             return div.innerHTML;
//           };
//         })();
//         const svgFinalOutput = getString(svg);
//         finalTargetImage = `data:image/svg+xml,${encodeURIComponent(svgFinalOutput)}`;
//         resolve();
//         // const canvas = document.createElement('canvas');
//         // const ctx = canvas.getContext('2d');
//         // canvas.width = width;
//         // canvas.height = height;
//         // const tempImg = document.createElement('img');
//         // tempImg.src = `data:image/svg+xml,${encodeURIComponent(svgFinalOutput)}`;
//         // ctx.drawImage(tempImg, 0, 0);
//         // const targetImg = canvas.toDataURL();
//         // finalTargetImage = targetImg;
//       });
//     });
//     return finalTargetImage;
//   });
//   return onImageLoad();
// };

const getSvgImageIcon = async (src, fillColor, backgroundColor) => {
  const onImageLoad = memoize(async () => {
    const width = 500;
    const height = 500;
    const dummySvg = document.createElement('svg');
    const container = document.createElement('div');
    dummySvg.setAttribute('data-src', src);
    container.appendChild(dummySvg);
    const options = {};
    let finalTargetImage = null;
    await new Promise((resolve) => {
      SVGInjector(dummySvg, options, () => {
        const svg = container.children[0];
        svg.style.width = `${width}px`;
        svg.style.height = `${height}px`;
        if (fillColor || backgroundColor) {
          svg.style.fill = fillColor;
          const paths = svg.getElementsByTagName('path');
          for (let i = 0; i < paths.length; i += 1) {
            const { parentElement } = paths[i];
            parentElement.setAttribute(
              'transform',
              `translate(${svg.width.animVal.value / 7},${svg.height.animVal.value / 7})`,
            );
            paths[i].setAttribute('transform', 'scale(0.7,0.7)');
            paths[i].style.fill = fillColor;
          }
          const svgns = src;
          const circle = document.createElement('circle');
          const g = document.createElement('g');
          circle.setAttribute('x', '0');
          circle.setAttribute('y', '0');
          circle.setAttribute('width', svg.width.animVal.value);
          circle.setAttribute('height', svg.height.animVal.value);
          circle.setAttribute('fill', backgroundColor);
          circle.setAttribute('r', svg.width.animVal.value / 2);
          circle.setAttribute('transform', `translate(${svg.width.animVal.value / 2},${svg.height.animVal.value / 2})`);
          svg.insertBefore(circle, svg.firstChild);
        }
        console.log(svg, 'svg');
        const getString = (() => {
          const DIV = document.createElement('div');
          if ('outerHTML' in DIV) return (node) => node.outerHTML;
          return (node) => {
            const div = DIV.cloneNode();
            div.appendChild(node.cloneNode(true));
            return div.innerHTML;
          };
        })();
        const svgFinalOutput = getString(svg);
        finalTargetImage = `data:image/svg+xml,${encodeURIComponent(svgFinalOutput)}`;
        resolve();
      });
    });
    return finalTargetImage;
  });
  return onImageLoad();
};

export default getSvgImageIcon;

/* eslint-disable no-promise-executor-return */
import SVGInjector from 'svg-injector';
import memoize from 'memoize-one';

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getSvgImageIcon = async (src, fillColor) => {
  const onImageLoad = memoize(async () => {
    const width = 500;
    const height = 500;
    const dummySvg = document.createElement('svg');
    const container = document.createElement('div');
    dummySvg.setAttribute('data-src', src);
    // dummySvg.setAttribute('key', src + fillColor);
    container.appendChild(dummySvg);
    const options = {};
    let finalTargetImage = null;
    await SVGInjector(dummySvg, options, async () => {
      const svg = container.children[0];
      svg.style.width = `${width}px`;
      svg.style.height = `${height}px`;
      if (fillColor) {
        svg.style.fill = fillColor;
        const paths = svg.getElementsByTagName('path');
        for (let i = 0; i < paths.length; i += 1) {
          paths[i].style.fill = fillColor;
        }
      }
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
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      // canvas.id = svgFinalOutput + fillColor;
      const tempImg = document.createElement('img');
      tempImg.src = `data:image/svg+xml,${encodeURIComponent(svgFinalOutput)}`;
      ctx.drawImage(tempImg, 0, 0);
      const targetImg = canvas.toDataURL();
      // await timeout(3000);
      finalTargetImage = targetImg;
    });
    return finalTargetImage;
  });
  return onImageLoad();
};

export default getSvgImageIcon;

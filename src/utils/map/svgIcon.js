import SVGInjector from 'svg-injector';
import html2canvas from 'html2canvas';
import memoize from 'memoize-one';

const SVGMapIcon = () => {
  const generateImage = memoize((src, fillColor) => {
    setTimeout(() => {
      const height = 500;
      const width = 500;
      const dummySvg = document.createElement('svg');
      const container = document.createElement('div');
      dummySvg.setAttribute('data-src', src);
      container.appendChild(dummySvg);
      const options = {};
      SVGInjector(dummySvg, options, () => {
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
        setTimeout(() => {
          document.body.appendChild(container);
          const svgCanvas = html2canvas(container, {
            allowTaint: true,
            width,
            height,
            backgroundColor: null, // transparent
          });
          svgCanvas.then((c) => {
            document.body.removeChild(container);
            const image = new Image();
            // image.onload = () => {
            //   this.setState({ image });
            // };
            image.src = c.toDataURL();
            setTimeout(() => {
              console.log(image, 'image');
            }, 2000);
          });
        }, Math.floor(100 + Math.random() * 16000));
      });
    }, 100);
  });
  return generateImage();
};

export default SVGMapIcon;

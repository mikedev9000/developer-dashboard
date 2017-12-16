function sinHelper(progress, min, max) {
  var height = max - min;

  return height * Math.sin(progress * Math.PI) + min;
}

function sinHelperWithNoise(progress, min, max, noise) {
  return sinHelper(progress, min - (Math.random() * noise), max + (Math.random() * noise));
}

const data = [];

for(var i = 0; i < 100; i++) {
  data.push({
    timestamp: new Date(i).toISOString(),
    temperature: sinHelperWithNoise(i / 100, 0, 100, 10),
    bar: i % 8 !== 0 && sinHelperWithNoise(i / 100, -100, 200, 100),
    foo: i % 8 !== 0 && sinHelperWithNoise(i / 100, -100, 200, 1000)
  });
}

export default data;

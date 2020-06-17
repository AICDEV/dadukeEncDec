console.log(decode('e390b5e3a0b6e384b6e390b7e618b5e3a4b6e38cb7e618b5e38cb7e618b6e618b6e618b6e618b5e398b6e394b7e38cb6e608b6e3a4b6e614b6e39cb6e618b5e39cb7e394b6e3a4b6e388b7e390b6'));

function decode(input) {
  if(input.length % 6 !== 0) {
    throw new Error('wront encoding. can\'t be decoded');
  }

  let result = [];

  for(let i = 0; i < input.length; i+=6) {

    let decoded = 0;

    let target = parseInt(input.slice(i,i+6),16);

    let xxxx = target & 0x0F;
    target = target >> 4;

    let x = target & 0x3F;
    target = target >> 6;

    let yyyy = target & 0x0F;
    target = target >> 4;

    let y = target & 0x3F;

    if(x == 0x1A) {
      xxxx += 9;
    }

    if(y == 0x1A) {
      yyyy += 9;
    }

    decoded |= xxxx;
    decoded = decoded << 4;
    decoded |= yyyy;

    result += String.fromCharCode(decoded)
  }
  return result;
}

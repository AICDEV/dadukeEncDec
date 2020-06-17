console.log(encode('That_is_sooo_fucking_weird'));

function encode(input) {

        let result = "";
        for(let i = 0; i < input.length; i++) {

            let encoded = 0;
            let x,y = 0;

            const code = String(input[i]).charCodeAt(0);
            ln = code & 0x0F;
            hn = code >> 4 & 0x0F;

            if(hn <= 0x9) {
                x = 0xB;
            } else {
                x = 0x18;
            }

            if(ln <= 0x9) {
                y = 0xE;
            } else {
                y = 0x18;
            }

            if(hn > 0x9) {
                hn -= 0x9;
            }

            if(ln > 0x9) {
                ln -= 0x9;
            }

            encoded |= 0xE;
            encoded = encoded << 6;
            encoded |= y;
            encoded = encoded << 4;
            encoded |= ln;
            encoded = encoded << 6;
            encoded |= x;
            encoded = encoded << 4;
            encoded |= hn;

            result += encoded.toString(16)
        }
      return result;
}

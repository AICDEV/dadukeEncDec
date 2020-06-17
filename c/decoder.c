#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/**

    split the character's byte into nibbles xxxx and yyyy
    have a look at xxxx. If it's <= 9, control x equals 001011, otherwise it's 011010
    have a look at yyyy. Here the bit patterns for control y are 001110 (yyyy<=9), 011010 otherwise
    if xxxx>9: xxxx -= 9
    if yyyy>9: yyyy -= 9

*/
unsigned char decodeChar(long target) {

    unsigned int result = 0;
    
    // // algo xxxx
    unsigned int xxxx = target & 0x0F;

    // control x
    target >>= 4;
    unsigned short x = target & 0x3F;

    // algo yyyy
    target >>= 6;
    unsigned short yyyy = target & 0x0F;

    // control y
    target >>= 4;
    unsigned short y = target & 0x3F;

    if(x == 0x1A) {
      xxxx += 9;
    }

    if(y == 0x1A) {
      yyyy += 9;
    }

    result |= xxxx;
    result <<= 4;

    result |= yyyy;

    return result;

}

int main(int argc, char *argv[]) {

    if(argc != 2) {
        printf("please give one text input to encode \n");
        exit(0);
    }

    if(strlen(argv[1]) % 6 != 0) {
        printf("wrong encoding. can't be decoded \n");
        exit(0);
    }

    char *input = malloc(strlen(argv[1]));
    strcpy(input, argv[1]);

    for(int i = 0; i < strlen(input); i +=6) {
        char block[6];
        strncpy(block, input+i, 6);

        char decoded = decodeChar(strtol(block, NULL, 16));

        printf("%c", decoded);

    }

    printf("\n");

    free(input);

    return 0;
}

# dadukeEncDec
Encoder and decoder written C for that weird stuff in binary blob in Active Directory https://daduke.org/linux/userparameters.html


# Important
Written and tested under Ubuntu Linux (Linux 5.3.0-51-generic #44-Ubuntu SMP x86_64 x86_64 x86_64 GNU/Linux)

# Compile encoder
Compile encoder gcc

```
gcc encoder.c -o encoder -Wall
```

# Compile decoder
```
gcc decoder.c -o decoder -Wall
```

# Use encoder
```
./encoder That_is_sooo_fucking_weird
```

# Use decoder
```
./decode e390b5e3a0b6e384b6e390b7e698b5e3a4b6e38cb7e698b5e38cb7e698b6e698b6e698b6e698b5e398b6e394b7e38cb6e688b6e3a4b6e694b6e39cb6e698b5e39cb7e394b6e3a4b6e388b7e390b6
```

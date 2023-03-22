// #18: Print the first 100 prime numbers
function prime(terms){
    var n = 0
    for(var i = 2; n < terms; i++){
        var flag = 0
        for(var j = 2; j <= i/2; j++){

            if(i % j == 0){
                flag = 1
                break
            }
        }

        if(flag != 1){
            print(n, i)
            n++
        }
    }
}
function print(n, i){
    console.log(n, " --> ", i);
}
prime(100);

/* Expected output
0 --> 2
1 --> 3
2 --> 5
3 --> 7
4 --> 11
5 --> 13
6 --> 17
7 --> 19
8 --> 23
9 --> 29
10 --> 31
11 --> 37
12 --> 41
13 --> 43
14 --> 47
15 --> 53
16 --> 59
17 --> 61
18 --> 67
19 --> 71
20 --> 73
21 --> 79
22 --> 83
23 --> 89
24 --> 97
25 --> 101
26 --> 103
27 --> 107
28 --> 109
29 --> 113
30 --> 127
31 --> 131
32 --> 137
33 --> 139
34 --> 149
35 --> 151
36 --> 157
37 --> 163
38 --> 167
39 --> 173
40 --> 179
41 --> 181
42 --> 191
43 --> 193
44 --> 197
45 --> 199
46 --> 211
47 --> 223
48 --> 227
49 --> 229
50 --> 233
51 --> 239
52 --> 241
53 --> 251
54 --> 257
55 --> 263
56 --> 269
57 --> 271
58 --> 277
59 --> 281
60 --> 283
61 --> 293
62 --> 307
63 --> 311
64 --> 313
65 --> 317
66 --> 331
67 --> 337
68 --> 347
69 --> 349
70 --> 353
71 --> 359
72 --> 367
73 --> 373
74 --> 379
75 --> 383
76 --> 389
77 --> 397
78 --> 401
79 --> 409
80 --> 419
81 --> 421
82 --> 431
83 --> 433
84 --> 439
85 --> 443
86 --> 449
87 --> 457
88 --> 461
89 --> 463
90 --> 467
91 --> 479
92 --> 487
93 --> 491
94 --> 499
95 --> 503
96 --> 509
97 --> 521
98 --> 523
99 --> 541
 */

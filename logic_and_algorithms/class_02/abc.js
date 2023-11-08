A = 5.0;
B = 6.0;
C =7.0;

MEDIA = (A * 2 + B * 3 + C * 5) / (2 + 3 + 5);


if (MEDIA > 10){
    MEDIA = 10;
}
else if (MEDIA < 0){
    MEDIA = 0;
}

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
function lottery(num: number): Promise<string> {
    console.log("Undian lotre dimulai..");
    console.log("Sedang mengundi nomor Anda.");
  
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 1000) + 1;
        // console.log(randomNum); // ini buat liat angkanya ada di berapa?

        if (num === randomNum) {
          resolve("Selamat! Anda mendapatkan hadiah utama berupa mobil.");
        } else {
          reject("Maaf, Anda kurang beruntung.");
        }
      }, 10000);
    });
  }
  
  lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Undian lotre telah berakhir."));
  
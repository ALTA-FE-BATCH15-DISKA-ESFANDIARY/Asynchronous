function jajanBoba(uang: number, callback: (error: string | null, sisaUang?: number) => void) {
    const hargaBoba = 5000
    if (uang >= hargaBoba) {
      const sisaUang = uang - hargaBoba
      console.log(`Kamu jajan boba dengan harga Rp.5000. Sisa uang kamu Rp.${sisaUang}`)
      callback(null, sisaUang)
    } else {
      callback("Maaf uang kamu tidak cukup untuk membeli boba", uang)
    }
  }
  
  function jajanSeblak(uang: number, callback: (error: string | null, sisaUang?: number) => void) {
    const hargaSeblak = 8000
    if (uang >= hargaSeblak) {
      const sisaUang = uang - hargaSeblak
      console.log(`Kamu jajan seblak dengan harga Rp.8000. Sisa uang kamu Rp.${sisaUang}`)
      callback(null, sisaUang)
    } else {
      callback("Maaf uang kamu tidak cukup untuk membeli seblak", uang)
    }
  }
  
  jajanBoba(20000, (error, sisaUang) => {
    if (error) {
      console.log(error)
    } else {
      jajanBoba(sisaUang!, (error, sisaUang) => {
        if (error) {
          console.log(error)
        } else {
          jajanSeblak(sisaUang!, (error, sisaUang) => {
            if (error) {
              console.log(error)
            } else {
              jajanBoba(sisaUang!, (error, sisaUang) => {
                if (error) {
                  console.log(error)
                }
              })
            }
          })
        }
      })
    }
  })

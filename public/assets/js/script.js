const apiKey = 'AIzaSyBdqTxMfUdYwnrrMNIBAeVXt85ckeMgHiI';
const playlistDasar = 'PLFIM0718LjIWXagluzROrA-iBY9eeUt4w';
const playlistDom = 'PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3';
const playlistLanjutan = 'PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-';
const playlistNode = 'PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD';

const getVideosTitle = async (x,y) => {
  let hasil = []
  for (let i = (x - 1); i < y; i++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistDasar}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[i])
              .then(res => res.snippet.title))
  }
  return hasil;
};
const getVideosId = async (x,y) => {
  let hasil = []
  for (let i = (x - 1); i < y; i++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistDasar}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[i])
              .then(res => res.snippet.resourceId.videoId))
  }
  return hasil;
};

const getVideosTitle2 = async (x,y) => {
  let hasil = []
  for (let j = (x - 1); j < y; j++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistDom}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[j])
              .then(res => res.snippet.title))
  }
  return hasil;
};
const getVideosId2 = async (x,y) => {
  let hasil = []
  for (let i = (x - 1); i < y; i++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistDom}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[i])
              .then(res => res.snippet.resourceId.videoId))
  }
  return hasil;
};

const getVideosTitle3 = async (x,y) => {
  let hasil = []
  for (let j = (x - 1); j < y; j++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistLanjutan}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[j])
              .then(res => res.snippet.title))
  }
  return hasil;
};
const getVideosId3 = async (x,y) => {
  let hasil = []
  for (let i = (x - 1); i < y; i++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistLanjutan}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[i])
              .then(res => res.snippet.resourceId.videoId))
  }
  return hasil;
};

const getVideosTitle4 = async (x,y) => {
  let hasil = []
  for (let j = (x - 1); j < y; j++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistNode}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[j])
              .then(res => res.snippet.title))
  }
  return hasil;
};
const getVideosId4 = async (x,y) => {
  let hasil = []
  for (let i = (x - 1); i < y; i++) {
    hasil.push(await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistNode}&key=${apiKey}`)
              .then(res => res.json())
              .then(res => res.items)
              .then(res => res[i])
              .then(res => res.snippet.resourceId.videoId))
  }
  return hasil;
};

const buatDayDiWeek = (x,y,z) => {
  let elementDiDalamWeek = '';
  for (let i = x; i <= y; i++) {
    elementDiDalamWeek += `
      <div class="accordion-item">
        <h3 class="accordion-header btnHari${i} h3" id="flush-headingHari${i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseHari${i}" aria-expanded="false" aria-controls="flush-collapseHari${i}">
            <b style='font-size:.9rem'>Hari ke-${i}</b>
          </button>
        </h3>
        <div id="flush-collapseHari${i}" class="accordion-collapse collapse" aria-labelledby="flush-headingHari${i}" data-bs-parent="#accordionFlushExampleWeek${z}">
          <div class="accordion-body hari${i} mx-auto text-center">
            <img src='assets/img/preloader.svg' width='80'>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    `
  }
  return elementDiDalamWeek;
};

const buatWeek = () => {
  let elementWeek = '';
  let firstDay = 1;
  let lastDay = 7;
  for (var i = 1; i <= 5; i++) {
    let status = (i == 1) ? '' : 'collapsed'
    elementWeek += `
      <div class="accordion-item">
        <h2 class="accordion-header h2" id="headingWeek${i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeek${i}" aria-expanded="false" aria-controls="collapseWeek${i}">
            <b>Minggu ke-${i}</b>
          </button>
        </h2>
        <div id="collapseWeek${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#bulan">
          <div class="accordion-body">
            <div class="accordion accordion-flush" id="accordionFlushExampleWeek${i}" style='font-size:.8rem'>
              ${buatDayDiWeek(firstDay,lastDay,i)}
            </div>
          </div>
        </div>
      </div>
    `
    firstDay += 7;
    if (lastDay < 28) {
      lastDay += 7;
    } else {
      lastDay += 2;
    }
  }
  return elementWeek;
}

const cetakArray = (title, id, x) => {
  let isiHari = '';
  for (let i = 0; i < title.length; i++) {
    isiHari += `
      <div class='my-3'>
        <div class=row>
          <div class=col-12>
            <b>${title[i]}</b>
          </div>
        </div>
        <div class='row mt-1'>
          <div class=col-12>
            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-title="${title[i]}" data-id='${id[i]}'>Tonton di sini</button>
            <a class='btn btn-danger btn-sm' target='_blank' href='https://youtu.be/${id[i]}'>Tonton di <i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    `
  }
  $(`.hari${x}`).html(isiHari)
}

const main = async () => {
  const week = buatWeek()
  $('#bulan').html(week);
  
  // hari ke-1
  $(`.btnHari1`).on('click', async () => {
    let title = await getVideosTitle(1,6)
    console.log(title)
    let id = await getVideosId(1,6)
    console.log(id)
    cetakArray(title, id, 1)
  })
  
  // hari ke-2
  $(`.btnHari2`).on('click', async () => {
    title = await getVideosTitle(7,13)
    console.log(title)
    id = await getVideosId(7,13)
    console.log(id)
    cetakArray(title, id, 2)
  })
  
  // hari ke-3
  $(`.btnHari3`).on('click', async () => {
    title = await getVideosTitle(14,18)
    console.log(title)
    id = await getVideosId(14,18)
    console.log(id)
    cetakArray(title, id, 3)
  })
  
  // hari ke-4
  $(`.btnHari4`).on('click', async () => {
    title = await getVideosTitle(19,23)
    console.log(title)
    id = await getVideosId(19,23)
    console.log(id)
    cetakArray(title, id, 4)
  });
  
  // hari ke-5
  $(`.btnHari5`).on('click', async () => {
    title = await getVideosTitle(24,27);
    console.log(title);
    id = await getVideosId(24,27);
    console.log(id);
    cetakArray(title, id, 5);
  })
  
  // hari ke-6
  $(`.btnHari6`).on('click', async () => {
    title = await getVideosTitle(28,31);
    console.log(title);
    id = await getVideosId(28,31);
    console.log(id);
    cetakArray(title, id, 6);
  })
  
  // hari ke-7
  $(`.btnHari7`).on('click', async () => {
    title = await getVideosTitle(32,37);
    console.log(title);
    id = await getVideosId(32,37);
    console.log(id);
    cetakArray(title, id, 7);
  })
  
  // hari ke-8
  $(`.btnHari8`).on('click', async () => {
    title = await getVideosTitle(38,42);
    console.log(title);
    id = await getVideosId(38,42);
    console.log(id);
    cetakArray(title, id, 8);
  })
  
  // hari ke-9
  $(`.btnHari9`).on('click', async () => {
    title = await getVideosTitle(43,44);
    id = await getVideosId(43,44);
    const title2 = await getVideosTitle2(1,2);
    console.log(title2)
    const id2 = await getVideosId2(1,2);
    const newTitle = title.concat(title2)
    const newId = id.concat(id2)
    console.log(newTitle);
    console.log(newId);
    cetakArray(newTitle, newId, 9);
  })
  
  // hari ke-10
  $(`.btnHari10`).on('click', async () => {
    title = await getVideosTitle2(3,5);
    console.log(title);
    id = await getVideosId2(3,5);
    console.log(id);
    cetakArray(title, id, 10);
  })
  
  // hari ke-11
  $(`.btnHari11`).on('click', async () => {
    title = await getVideosTitle2(6,7);
    console.log(title);
    id = await getVideosId2(6,7);
    console.log(id);
    cetakArray(title, id, 11);
  })
  
  // hari ke-12
  $(`.btnHari12`).on('click', async () => {
    title = await getVideosTitle2(8,9);
    console.log(title);
    id = await getVideosId2(8,9);
    console.log(id);
    cetakArray(title, id, 12);
  })
  
  // hari ke-13
  $(`.btnHari13`).on('click', async () => {
    title = await getVideosTitle2(10,13);
    console.log(title);
    id = await getVideosId2(10,13);
    console.log(id);
    cetakArray(title, id, 13);
  })
  
  // hari ke-14
  $(`.btnHari14`).on('click', async () => {
    title = await getVideosTitle2(14,14);
    console.log(title);
    id = await getVideosId2(14,14);
    console.log(id);
    title2 = await getVideosTitle3(1,4);
    console.log(title2);
    id2 = await getVideosId3(1,4);
    console.log(id2);
    title = title.concat(title2)
    id = id.concat(id2)
    
    cetakArray(title, id, 14);
  })
  
  // hari ke-15
  $(`.btnHari15`).on('click', async () => {
    title = await getVideosTitle3(5,8);
    console.log(title);
    id = await getVideosId3(5,8);
    console.log(id);
    cetakArray(title, id, 15);
  })
  
  // hari ke-16
  $(`.btnHari16`).on('click', async () => {
    title = await getVideosTitle3(9,12);
    console.log(title);
    id = await getVideosId3(9,12);
    console.log(id);
    cetakArray(title, id, 16);
  })
  
  // hari ke-17
  $(`.btnHari17`).on('click', async () => {
    title = await getVideosTitle3(13,16);
    console.log(title);
    id = await getVideosId3(13,16);
    console.log(id);
    cetakArray(title, id, 17);
  })
  
  // hari ke-18
  $(`.btnHari18`).on('click', async () => {
    title = await getVideosTitle3(17,20);
    console.log(title);
    id = await getVideosId3(17,20);
    console.log(id);
    cetakArray(title, id, 18);
  })
  
  // hari ke-19
  $(`.btnHari19`).on('click', async () => {
    title = await getVideosTitle3(21,22);
    console.log(title);
    id = await getVideosId3(21,22);
    console.log(id);
    cetakArray(title, id, 19);
  })
  
  // hari ke-20
  $(`.btnHari20`).on('click', async () => {
    title = await getVideosTitle3(23,25);
    console.log(title);
    id = await getVideosId3(23,25);
    console.log(id);
    cetakArray(title, id, 20);
  })
  
  // hari ke-21
  $(`.btnHari21`).on('click', async () => {
    title = await getVideosTitle3(26,27);
    console.log(title);
    id = await getVideosId3(26,27);
    console.log(id);
    
    title2 = await getVideosTitle4(1,2);
    console.log(title2);
    id2 = await getVideosId4(1,2);
    console.log(id);
    
    title = title.concat(title2)
    id = id.concat(id2)
    cetakArray(title, id, 21);
  })
  
  // hari ke-22
  $(`.btnHari22`).on('click', async () => {
    title = await getVideosTitle4(3,6);
    console.log(title);
    id = await getVideosId4(3,6);
    console.log(id);
    cetakArray(title, id, 22);
  })
  
  // hari ke-23
  $(`.btnHari23`).on('click', async () => {
    title = await getVideosTitle4(7,9);
    console.log(title);
    id = await getVideosId4(7,9);
    console.log(id);
    cetakArray(title, id, 23);
  })
  
  // hari ke-24
  $(`.btnHari24`).on('click', async () => {
    title = await getVideosTitle4(10,11);
    console.log(title);
    id = await getVideosId4(10,11);
    console.log(id);
    cetakArray(title, id, 24);
  })
  
  // hari ke-25
  $(`.btnHari25`).on('click', async () => {
    title = await getVideosTitle4(12,13);
    console.log(title);
    id = await getVideosId4(12,13);
    console.log(id);
    cetakArray(title, id, 25);
  })
  
  // hari ke-26
  $(`.btnHari26`).on('click', async () => {
    title = await getVideosTitle4(14,15);
    console.log(title);
    id = await getVideosId4(14,15);
    console.log(id);
    cetakArray(title, id, 26);
  })
  
  // hari ke-27
  $(`.btnHari27`).on('click', async () => {
    title = await getVideosTitle4(16,17);
    console.log(title);
    id = await getVideosId4(16,17);
    console.log(id);
    cetakArray(title, id, 27);
  })
  
  // hari ke-28
  $(`.btnHari28`).on('click', async () => {
    title = await getVideosTitle4(18,19);
    console.log(title);
    id = await getVideosId4(18,19);
    console.log(id);
    cetakArray(title, id, 28);
  })
  
  // hari ke-29
  $(`.btnHari29`).on('click', async () => {
    title = await getVideosTitle4(20,22);
    console.log(title);
    id = await getVideosId4(20,22);
    console.log(id);
    cetakArray(title, id, 29);
  })
  
  // hari ke-30
  $(`.btnHari30`).on('click', async () => {
    title = await getVideosTitle4(23,24);
    console.log(title);
    id = await getVideosId4(23,24);
    console.log(id);
    cetakArray(title, id, 30);
  })
  
};
main();
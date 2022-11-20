const dataAneh = {
    statusCode: 200,
    listing: [
      {
        id: 1,
        name: "budi",
        hobbies: {
          day: "monday",
          activity: "running",
          location: "sport hall",
        },
      },
      {
        id: 2,
        name: "ahmad",
        hobbies: {
          day: "monday",
          activity: "swimming",
          location: "empang",
        },
      },
    ],
  };
  

    // tanpa function
    
    const getHobbies = dataAneh.listing[1].hobbies;

    // console.log(getHobbie

    for (const key in getHobbies) {
    
    // console.log(getHobbies[key]);
};

    // pakai function

    function getHobbies(param) {
      let result = ''
      let hobbiesResult = ''
      param.listing.filter((item) => {

        if (item.name === 'ahmad') {
          result = items.hobbies[0];
        };
        for (let key in result) {
          hobbiesResult = result[key];
        };
      });
      return ''
    };

    // console.log(getHobbies(dataAneh));
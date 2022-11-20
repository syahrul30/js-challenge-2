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
  

    const getHobbies = dataAneh.listing[1].hobbies;

    // console.log(getHobbies)

    for (const key in getHobbies) {
    
    // console.log(getHobbies[key]);
};
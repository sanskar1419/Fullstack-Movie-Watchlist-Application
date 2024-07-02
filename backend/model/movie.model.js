// Defining DoctorModel class
export default class MovieModel {
  constructor(
    name,
    description,
    rating,
    IMDbRating,
    popularity,
    year,
    type,
    genre,
    runtime,
    language,
    director,
    writers,
    productionCompany,
    productionCountry,
    poster,
    image,
    youtubeURL,
    streamingPlatform,
    id
  ) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.IMDbRating = IMDbRating;
    this.popularity = popularity;
    this.year = year;
    this.type = type;
    this.genre = [...genre];
    this.runtime = runtime;
    this.language = language;
    this.director = director;
    this.writers = [...writers];
    this.productionCompany = productionCompany;
    this.productionCountry = productionCountry;
    this.poster = poster;
    this.image = [...image];
    this.youtubeURL = [...youtubeURL];
    this.streamingPlatform = [...streamingPlatform];
  }
}

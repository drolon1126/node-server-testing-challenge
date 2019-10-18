const db = require('../../data/dbConfig.js');

const Movies = require('./movieModel.js');

describe(' movieModel', () => {
  beforeEach(async () => {
    await db('movies').truncate();
  });

  describe('insert()', () => {
    it('should add movies to db', async () => {
      let movies = await db('movies');
      expect(movies).toHaveLength(0);

      await Movies.insert({ title:"test", overview:"test overview" });

      movies = await db('movies');
      expect(movies).toHaveLength(1);
    });
    it('should add the provided hobbit to db', async () => {
      let movie = await Movies.insert({ title:"test", overview:"test overview" });
      expect(movie.title).toBe('test');
      expect(movie.overview).toBe('test overview');
    
      movie = await Movies.insert({ title:"movie", overview:"best movie" });
      expect(movie.title).toBe('movie');
      expect(movie.overview).toBe('best movie');
    });
  });

  describe('delete()', () => {
    it('should delete movies from db', async () => {
      
      await Movies.insert({ title:"test", overview:"test overview" });
      let movies = await db('movies');
      expect(movies).toHaveLength(1);

      await Movies.delete(1);
      let movies = await db('movies');
      expect(movies).toHaveLength(0);
    });
    it('should delete the provided hobbit from db', async () => {
      await Movies.insert({ title:"test", overview:"test overview" });

      let movie = Movies.delete(1);
      expect(movie.title).toBe('test');
      expect(movie.overview).toBe('test overview');
    
    });
  });
});
/* eslint no-undef: 0 */
const SoftUniFy = require('./03. Softunify');
const assert = require('chai').assert;

describe('Softunify tests', function () {
  describe('constructor', function () {
    it('should return empty object on new init', function () {
      let softunify = new SoftUniFy();

      let actual = softunify.constructor.length;
      let expected = 0;

      assert.equal(actual, expected);
    });
  });

  describe('downloadSong', function () {
    it('download song method shoud add artist and song', function () {
      let softunify = new SoftUniFy();

      softunify.downloadSong('Death', 'Voice of the soul', '...');

      let actual = softunify.songsList;
      let expected = 'Voice of the soul - ...';

      assert.equal(actual, expected);
    });
  });

  describe('playSong()', function () {
    it('should play given song', function () {
      let softunify = new SoftUniFy();

      softunify.downloadSong('Death', 'Voice of the soul', '...');

      let actual = softunify.playSong('Voice of the soul');
      let expected = 'Death:\nVoice of the soul - ...\n';

      assert.equal(actual, expected);
    });

    it('should return string with error when playing song not downloaded yet', function () {
      let softunify = new SoftUniFy();

      let song = 'Voice of the soul';
      let actual = softunify.playSong(song);
      let expected = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`;

      assert.equal(actual, expected);
    });
  });

  describe('sоngList', function () {
    it('songsList should return all downloaded songs', function () {
      let softunify = new SoftUniFy();

      softunify.downloadSong('Death', 'Symbolic', '...');
      softunify.downloadSong('Death', 'Painkiller', '.....');
      let actual = softunify.songsList;
      let expected = 'Symbolic - ...\nPainkiller - .....';

      assert.equal(actual, expected);
    });

    it('songsList should return message when empty list', function () {
      let softunify = new SoftUniFy();

      let actual = softunify.songsList;
      let expected = 'Your song list is empty';

      assert.equal(actual, expected);
    });
  });

  describe('rateArtist()', function () {
    it('rateArtist() should return message when artist not found', function () {
      let softunify = new SoftUniFy();

      let artist = 'Death';
      let actual = softunify.rateArtist(artist);
      let expected = `The ${artist} is not on your artist list.`;

      assert.equal(actual, expected);
    });

    it('rateArtist() should return 0 when second argument is NaN', function () {
      let softunify = new SoftUniFy();

      softunify.downloadSong('Death', 'Symbolic', '...');
      let artist = 'Death';
      let actual = softunify.rateArtist(artist, 'x');
      let expected = 0;

      assert.equal(actual, expected);
    });

    it('rateArtist() should return correct rating', function () {
      let softunify = new SoftUniFy();

      softunify.downloadSong('Death', 'Symbolic', '...');
      let artist = 'Death';
      let actual = softunify.rateArtist(artist, 50);
      let expected = 50;

      assert.equal(actual, expected);
    });
  });
});

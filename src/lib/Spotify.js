import fetcher from './fetcher';

exports.play = (trackName) => {

};

exports.search = (query) => {
  fetcher.get(`search?type=track&q=${query}`);
};

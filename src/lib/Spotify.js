import fetcher from './fetcher';

exports.play = (trackName) => {

};

exports.search = async (query) => {
  const result = await fetcher.get('search');
  console.log(result);
};

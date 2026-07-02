export function pexels(id: number, w = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const PHOTOS = {
  hero: pexels(5262808, 2000), // gray propeller jet parked for maintenance, spacious air shed
  team: pexels(37616798, 1600), // maintenance crew inspecting airplane in hangar
  engine: pexels(459402, 1600), // jet engine close-up, monochrome, no airline branding
  wing: pexels(5493554, 1600), // low angle engines and wing of modern aircraft
  engineDetail: pexels(459402, 1200), // jet engine close-up, monochrome
  runway: pexels(19538096, 1600), // airplane on runway, small airport
  cargo: pexels(19331895, 1600), // cargo airplane at airport
  heroJet: pexels(1493756, 1800), // airliner climbing against deep blue sky, worm's eye view
};

import extractDate from './extractDate';

export default function api(checkIn, checkOut) {
  const checkInDate = extractDate(checkIn);
  const checkOutdate = extractDate(checkOut);

  return `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=fa068d9a-889d-47d9-adda-0088587755a7#/&diff=false&CheckIn=${checkInDate}&CheckOut=${checkOutdate}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`;
}

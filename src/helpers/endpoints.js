const baseEndpoint = "https://uatbook.txj.co.jp/v4";
const serviceEndpoint = `${baseEndpoint}/Services`;
const pageEndpoint = `${baseEndpoint}/Pages`;
const endpoints = {
  search: `${serviceEndpoint}/EntityService.jsws/Search`,
  primaryLocations: `${serviceEndpoint}/EntityService.jsws/GetPrimaryLocations`,
  injection: `${serviceEndpoint}/Injection.aspx`,
  searchPage: `${pageEndpoint}/Search.aspx`,
  bookingQuote: `${serviceEndpoint}/BookingService.jsws/GetBookingQuote`,
};
export default { endpoints };

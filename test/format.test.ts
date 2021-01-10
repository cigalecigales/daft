import format from '../src/format';
import DateFormats from '../src/DateFormats';

describe('format test', (): void => {
  test('default format.', (): void => {
    const testData = new Date(2021, 1, 3, 4, 5, 6, 7);
    const response: string = format(testData);
    expect(response).toBe('2021/02/03');
  });

  test('various format.', (): void => {
    const testData = new Date(2021, 1, 3, 4, 5, 6, 7);

    const response1: string = format(testData, DateFormats.YYYY);
    expect(response1).toBe('2021');

    const response2: string = format(testData, DateFormats.YYYYMM);
    expect(response2).toBe('202102');

    const response3: string = format(testData, DateFormats.YYYYMMDD);
    expect(response3).toBe('20210203');

    const response4: string = format(testData, DateFormats.YYYYMMDD_hhmmss);
    expect(response4).toBe('20210203 040506');

    const response5: string = format(testData, DateFormats.YYYYMMDD_hhmmssSSS);
    expect(response5).toBe('20210203 040506007');

    const response6: string = format(testData, DateFormats.YYYY_MM);
    expect(response6).toBe('2021/02');

    const response7: string = format(testData, DateFormats.YYYY_MM_DD);
    expect(response7).toBe('2021/02/03');

    const response8: string = format(testData, DateFormats.YYYY_MM_DD_hh_mm_ss);
    expect(response8).toBe('2021/02/03 04:05:06');

    const response9: string = format(testData, DateFormats.YYYY_MM_DD_hh_mm_ss_SSS);
    expect(response9).toBe('2021/02/03 04:05:06.007');
  });
});

import { parseTankWaves, parseLine, parseWave } from '../../parsers/parseTankWaves';
import { flattenArray } from '../../utils';

describe('parse tank waves config file', () => {

  it('should parse one wave', () => {
    const input = 'bgcolor=skyblue|2 Basic Tanks';
    expect(parseWave(input)).toEqual(['Basic Tank', 'Basic Tank']);
  });

  it('should parse one line', () => {
    const input = '|Stage 9||★||bgcolor=skyblue|2 Basic Tanks||bgcolor=PaleGreen|1 Fast Tanks|' +
      '|bgcolor=Gold|1 Power Tanks||bgcolor=Salmon|2 Armor Tanks';
    expect(parseLine(input, flattenArray)).toEqual([
      'Basic Tank',
      'Basic Tank',
      'Fast Tank',
      'Power Tank',
      'Armor Tank',
      'Armor Tank'
    ]);
  });

  it('should parse multiple lines', () => {
    const input = '|Stage 6||★||bgcolor=Gold|2 Power Tanks\n' +
      '|-\n' +
      '|Stage 7||★★||bgcolor=skyblue||bgcolor=skyblue|1 Basic Tanks\n' +
      '|-';
    expect(parseTankWaves(input, flattenArray)).toEqual([
      ['Power Tank', 'Power Tank'],
      ['Basic Tank']
    ]);
  });

});
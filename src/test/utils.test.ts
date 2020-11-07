import emoji from 'node-emoji';
import { GetEmojy } from '../utils';

test('test get emojy rain', () => {
    expect(GetEmojy("Rain")).toBe(emoji.get('rain_cloud'))
})

test('test partly cloudy emoji', () => {
    expect(GetEmojy("Partly Cloudy")).toBe(emoji.get('partly_sunny'));
})

test('test Scattered Thunderstorms emoji', () => {
    expect(GetEmojy('Scattered Thunderstorms')).toBe(emoji.get('thunder_cloud_and_rain'));
})

test('test Scattered Showers emoji', () => {
    expect(GetEmojy('Scattered Showers')).toBe(emoji.get('rain_cloud'))
})

test('test Mostly Cloudy emoji', () => {
    expect(GetEmojy('Mostly Cloudy')).toBe(emoji.get('partly_sunny'))
})

test('test Mostly Sunny emoji', () => {
    expect(GetEmojy('Mostly Sunny')).toBe(emoji.get('sun_small_cloud'))
})

test('test Breezy emoji', () => {
    expect(GetEmojy('Breezy')).toBe(emoji.get('dash'))
})

test('test Cloudy emoji', () => {
    expect(GetEmojy('Cloudy')).toBe(emoji.get('cloud'))
})

test('test Sunny emoji', () => {
    expect(GetEmojy('Sunny')).toBe(emoji.get('☀️'))
})

test('test with bad type', () => {
    expect(GetEmojy('bad type')).toBe('')
})

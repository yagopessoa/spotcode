import styled from 'styled-components';
import {
  Heading as HeadingRaw,
  Columns as ColumnsRaw,
} from 'react-bulma-components';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';

export const Divider = styled.hr`
  height: 1px;
  margin-top: 0px;
`;

export const Title = styled(HeadingRaw).attrs(() => ({
  className: 'has-text-white',
  size: 5,
}))``;

export const ArtistName = styled(HeadingRaw).attrs(() => ({
  className: 'has-text-white',
  size: 6,
  subtitle: true,
}))`
  margin-bottom: 0px !important;
`;

export const Play = styled(FaPlayCircle).attrs(() => ({
  className: 'has-text-white',
  size: '45px',
}))`
  cursor: pointer;
`;

export const Stop = styled(FaStopCircle).attrs(() => ({
  className: 'has-text-white',
  size: '45px',
}))`
  cursor: pointer;
`;

export const Row = styled(ColumnsRaw).attrs(() => ({
  className: 'is-vcentered is-mobile is-centered',
}))``;

export const MusicRow = styled(ColumnsRaw).attrs(() => ({
  className: 'is-vcentered is-mobile',
}))``;

export const PlayColumn = styled(ColumnsRaw.Column).attrs(() => ({
  desktop: {
    size: 1,
  },
  mobile: {
    size: 2,
  },
}))``;

export const MusicColumn = styled(ColumnsRaw.Column).attrs(() => ({
  desktop: {
    size: 4,
  },
  mobile: {
    size: 8,
  },
}))``;

export const TextColumn = styled(ColumnsRaw.Column).attrs(() => ({
  desktop: {
    size: 8,
  },
  mobile: {
    size: 8,
  },
}))``;

export const FavoriteColumn = styled(ColumnsRaw.Column).attrs(() => ({
  className: 'is-pulled-right has-text-right',
  desktop: {
    size: 4,
  },
  mobile: {
    size: 4,
  },
}))``;

import React from 'react';
import {Placeholder} from '../components/placeholder/placeholder';
import {Flex, Box} from '../components/flex';

export default class PlaceholderPage extends React.Component {
  render() {
    return (
      <Flex col spacing="large" style={{margin: '4rem'}}>
        <Box><Placeholder size="huge" lines={1}/></Box>
        <Box><Placeholder size="default" width="200px"/></Box>
        <Box><Placeholder lines={4}/></Box>
        <Box><Placeholder lines={2}/></Box>
        <Box><Placeholder lines={10}/></Box>
        <Box><Placeholder lines={7}/></Box>
      </Flex>
    );
  }
}

import React from 'react';
import { Chip } from './chip';
import { DocPage, Example } from '../../../docs/docs-components';
import { CheckIcon } from '../icons';

const ChipPage = () => {
  return (
    <DocPage
      {...{
        componentName: 'Chip',
        propList: [
          {
            name: 'size',
            type: 'string (possible values: "sm", "md", "lg")',
            description: 'Size of the chip (adds the `is-size-{size}` class)'
          },
          {
            name: 'className',
            type: 'string',
            description: 'Class to put on the outer `div` element'
          },
          {
            name: '...props',
            description:
              'All other props will be passed to the outer `div` element'
          }
        ],
        examples: (
          <div>
            <Example {...{ title: 'Simple chip' }}>
              <Chip>A chip</Chip>
            </Example>
            <Example {...{ title: 'Chip with custom icon' }}>
              <Chip icon={<CheckIcon />}>Chip with custom icon</Chip>
            </Example>
            <Example {...{ title: 'Chip without icon' }}>
              <Chip hideIcon>Chip with no icon</Chip>
            </Example>
            <Example {...{ title: 'Disabled chip' }}>
              <Chip disabled>Disabled chip</Chip>
            </Example>
            <Example {...{ title: 'Chip sizes' }}>
              <div>
                <Chip size="sm">Small chip</Chip>
                <Chip size="md" className="ml-1">
                  Medium chip
                </Chip>
                <Chip size="lg" className="ml-1">
                  Large chip
                </Chip>
              </div>
            </Example>
          </div>
        )
      }}
    />
  );
};

export default ChipPage;
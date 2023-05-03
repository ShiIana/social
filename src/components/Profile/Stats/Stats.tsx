import Card from '../../UI/Card';
import StatItem from './StatItem';
import {FC} from 'react';

export type StatInfoType = {
  statInfo: Array<StatType>
}

export type StatType = {
  id?: string
  counter: number
  icon: JSX.Element
  text: string
}

const Stats: FC<StatInfoType> = ({statInfo}) => {
  return (
    <>
      {
        statInfo.map(stat => {
          return <Card key={stat.id}>
            <StatItem counter={stat.counter} icon={stat.icon} text={stat.text}/>
          </Card>
        })
      }
    </>
  );
};

export default Stats;
import moment from 'moment';
import 'moment/locale/id';

const DateComponent = (dateFromComponent) => {
  let [date, time] = dateFromComponent.split(' ');
  const formattedDate = moment(date).locale('id').format('DD MMMM YYYY');
  return formattedDate;
};

export default function PostCard(props) {
  const { title, postDate, image } = props;

  const formatedDate = DateComponent(postDate);

  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
        />
      </figure>
      <div className='card-body rounded-b-lg bg-white'>
        <h2 className='card-title text-slate-400'>{formatedDate}</h2>
        <h1 className='card-title'>{title}</h1>
      </div>
    </div>
  );
}

export default function AvatarInput(props) {

  const handleChange = e => {
    props.onAvatarChange(e.target.value);
  }

  return (
    <fieldset>
        <legend>頭像</legend>
        <select onChange={handleChange}>
          <option value="deep">寒風低頭(?</option>
          <option value="dragonDog">炸彈龍犬</option>
        </select>
    </fieldset>
  );
}

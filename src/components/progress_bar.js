function ProgressBar(props) {
  const {title} = props
  const min = props.min | 0;
  const max = props.max | 100;
  const current = props.current | Math.random()*max+1;
  return (
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow={current} aria-valuemin={min} aria-valuemax={max}></div>
    </div>
   );
}

export default ProgressBar;
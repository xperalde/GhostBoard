import type { FC } from 'react';
import { useCallback } from 'react';
import styles from './PostLengthFilter.module.css';

type PostLengthFilterProps = {
  onChange: (max: number) => void;
  max: number;
};

const PostLengthFilter: FC<PostLengthFilterProps> = ({ onChange, max }) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.target.value));
    },
    [onChange]
  );

  return (
    <div className={styles['post-length-filter']}>
      <label>
        Максимальная длина заголовка:
        <input
          type="number"
          min="0"
          value={max}
          onChange={handleChange}
          placeholder="0 = без фильтра"
        />
      </label>
    </div>
  );
};

export default PostLengthFilter;

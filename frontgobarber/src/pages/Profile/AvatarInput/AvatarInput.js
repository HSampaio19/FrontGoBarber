import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@rocketseat/unform';
import DefaultProfile from '../../../assets/images/DefaultProfile.jpg';
import api from '../../../services/api';

function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data.file;

    setFile(id);
    setPreview(url);
  }
  return (
    <label htmlFor="avatar">
      <img src={preview || DefaultProfile} alt="avatar" />

      <input
        type="file"
        id="avatar"
        accept="image/*"
        onChange={handleChange}
        data-file={file}
        ref={ref}
      />
    </label>
  );
}

export default AvatarInput;

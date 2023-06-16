'use client';

import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import type { InputRef } from 'antd';
import { createClient } from '@supabase/supabase-js';

const playerSelectFilter: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const handleNewPlayer = async () => {
    const { data, error } = await supabase.from('players').insert([{ name }]);
    console.log(data);
    if (error) {
      console.log('Error adding player:', error);
    } else {
      console.log('Player added successfully');
      setItems([...items, name]);
      setName('');
    }
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    const playerName = event.target.value.trim();
    console.log(playerName);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    handleNewPlayer();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Space style={{ padding: '0 8px' }}>
          <Input
            placeholder="Enter new player"
            ref={inputRef}
            value={name}
            onChange={onNameChange}
          />
          <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
            Add player
          </Button>
        </Space>
      </div>
      <Divider style={{ margin: '8px 0' }} />
      <Select
        style={{ width: 300 }}
        placeholder="Search player"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: '8px 0' }} />
            <div style={{ padding: '0 8px 4px' }}>
              <Input
                placeholder="Enter new player"
                ref={inputRef}
                value={name}
                onChange={onNameChange}
              />
              <Button type="text" icon={<PlusOutlined />} onClick={handleNewPlayer}>
                Add player
              </Button>
            </div>
          </>
        )}
        options={items.map((item) => ({ label: item, value: item }))}
        mode="multiple"
        allowClear
        onChange={(selectedItems: string[]) => {
          setItems(selectedItems);
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <button className="bg-pink-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </>
  );
};

export default playerSelectFilter;

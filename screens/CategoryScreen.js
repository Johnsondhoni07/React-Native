import React from 'react';
import {View, FlatList} from 'react-native';
import {CATEGORIES} from '../Data/dummy_data';
import GirdView from '../Components/GirdView';

const Category = props => {
  const renderGridItem = itemData => {
    return (
      <GirdView
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate(
            'MealsCategory',{
              categoryId:itemData.item.id,
            }
          );
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default Category;

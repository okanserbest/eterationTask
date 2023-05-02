import React from 'react';
import { View, Image, Modal, Text, StyleSheet, Alert, Pressable } from 'react-native';
import { useTheme } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { openModel } from 'eterationTask/src/store/products';
import styles from './FilterModel.style';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'

const items = [
  // this is the parent or 'item'
  {
    name: 'Fruits',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },

];


const FilterModel = () => {
  const { Layout, Images } = useTheme();
  const [selectedItems, setSelectedItems] = React.useState([]);
  const dispatch = useDispatch();
  const filter = useSelector((state: any) => state.products).filter
  console.log({ filter })
  console.log("filter.visible", filter.visible)
  const onSelectedItemsChange = (selectedItems: any) => {
    console.log("selectedItems", selectedItems)
    setSelectedItems(selectedItems)
  }
  const filteritems = [
    {
      name: "Brants",
      id: 999998,
      children: filter.brantList.map((brant, index) => {
        return { name: brant, id: index * 2 }
      })
    },
    {
      name: "model", id: 999999, children: filter.modelList.map((model, index) => {
        return { name: model, id: index * 20 }
      })
    }
  ]

  console.log(onSelectedItemsChange)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={filter.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Brand</Text>
            <SectionedMultiSelect
              items={filteritems}
              IconRenderer={Icon}
              uniqueKey="id"
              subKey="children"
              selectText="Choose some things..."
              showDropDowns={true}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems}
            />


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => dispatch(openModel(false))}>
              <Text style={styles.textCloseStyle}>x</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>


  );
};





export default FilterModel;

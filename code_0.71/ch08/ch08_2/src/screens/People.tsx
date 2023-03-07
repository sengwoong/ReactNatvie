import React, {useCallback, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import type {AppState} from '../store';
import type {PeopleState} from '../store/people';
import {useSelector, useDispatch} from 'react-redux';
import * as D from '../data';
import Person from './Person';
import * as P from '../store/people';

export default function People() {
  const [scrollEnabled] = useScrollEnabled();
  const people = useSelector<AppState, PeopleState>(({people}) => people);
  const dispatch = useDispatch();

  const addPerson = useCallback(() => {
    dispatch(P.addAction(D.createRandomPerson()));
  }, [dispatch]);

  const removeAllPersons = useCallback(() => {
    dispatch(P.deleteAllAction());
  }, [dispatch]);
  const deletePerson = useCallback(
    (id: string) => () => {
      dispatch(P.deleteAction(id));
    },
    [dispatch],
  );
  useEffect(() => D.makeArray(5).forEach(addPerson), []);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <TopBar>
            <UnderlineText onPress={addPerson} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAllPersons} style={styles.text}>
              remove all{' '}
            </UnderlineText>
          </TopBar>
          <FlatList
            scrollEnabled={scrollEnabled}
            data={people}
            renderItem={({item}) => (
              <Person person={item} deletePressed={deletePerson(item.id)} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});

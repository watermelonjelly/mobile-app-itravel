import React from 'react';
import renderer from 'react-test-renderer';

import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';
import AppIcon from './app/components/AppIcon';
import AppListItem from './app/components/AppListItem';
import AppPicker from './app/components/AppPicker';
import AppPickerItem from './app/components/AppPickerItem';
import AppScreen from './app/components/AppScreen';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import NewListScreen from './app/screens/NewListScreen';
import MyExtraScreen from './app/screens/MyExtraScreen';






describe('Components render properly',()=>{
    it('AppButton matches the snapshot',() =>{
        const button = renderer.create(<AppButton />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('AppCard matches the snapshot',() =>{
        const card = renderer.create(<AppCard />).toJSON();
        expect(card).toMatchSnapshot();
    });

    it('AppIcon matches the snapshot',() =>{
        const icon = renderer.create(<AppIcon />).toJSON();
        expect(icon).toMatchSnapshot();
    });

    it('AppListItem matches the snapshot',() =>{
        const listItem = renderer.create(<AppListItem />).toJSON();
        expect(listItem).toMatchSnapshot();
    });

    it('AppPicker matches the snapshot',() =>{
        const picker = renderer.create(<AppPicker />).toJSON();
        expect(picker).toMatchSnapshot();
    });

    it('AppPickerItem matches the snapshot',() =>{
        const pickerItem = renderer.create(<AppPickerItem />).toJSON();
        expect(pickerItem).toMatchSnapshot();
    });

    it('AppScreen matches the snapshot',() =>{
        const screen = renderer.create(<AppScreen />).toJSON();
        expect(screen).toMatchSnapshot();
    });

    it('AppText matches the snapshot',() =>{
        const text = renderer.create(<AppText />).toJSON();
        expect(text).toMatchSnapshot();
    });

    it('AppTextInput matches the snapshot',() =>{
        const textInput = renderer.create(<AppTextInput />).toJSON();
        expect(textInput).toMatchSnapshot();
    });

    


});

describe('Screen is working correctly',()=>{

    it('WelcomeScreen matches the snapshot',() =>{
        const welcome = renderer.create(<WelcomeScreen />).toJSON();
        expect(welcome).toMatchSnapshot();
    });

    it('LoginScreen matches the snapshot',() =>{
        const login = renderer.create(<LoginScreen />).toJSON();
        expect(login).toMatchSnapshot();
    });

    it('RegisterScreen matches the snapshot',() =>{
        const register = renderer.create(<RegisterScreen />).toJSON();
        expect(register).toMatchSnapshot();
    });

    it('NewListScreen matches the snapshot',() =>{
        const newList = renderer.create(<NewListScreen />).toJSON();
        expect(newList).toMatchSnapshot();
    });

    it('MyExtraScreen matches the snapshot',() =>{
        const extra = renderer.create(<MyExtraScreen />).toJSON();
        expect(extra).toMatchSnapshot();
    });
});
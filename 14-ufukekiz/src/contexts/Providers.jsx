import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthProvider, { useAuth } from './AuthProvider'

const Providers = ({children}) => {



  return <AuthProvider>{children}</AuthProvider>
}

export default Providers

const styles = StyleSheet.create({})
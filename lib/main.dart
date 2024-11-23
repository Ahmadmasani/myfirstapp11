import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:plant_identifier/theme/theme_provider.dart';
import 'package:plant_identifier/screens/home_screen.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => ThemeProvider(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (context, themeProvider, child) {
        return MaterialApp(
          title: 'Plant Identifier',
          debugShowCheckedModeBanner: false,
          theme: ThemeData.light(useMaterial3: true).copyWith(
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.green),
          ),
          darkTheme: ThemeData.dark(useMaterial3: true).copyWith(
            colorScheme: ColorScheme.fromSeed(
              seedColor: Colors.green,
              brightness: Brightness.dark,
            ),
          ),
          themeMode: themeProvider.themeMode,
          home: const HomeScreen(),
        );
      },
    );
  }
}
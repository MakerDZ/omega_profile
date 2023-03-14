/** @type {import('tailwindcss').Config} */

const Config = require('./config');
const config = Config.config

console.log(config.theme_color.profile_section.card_gradient.top)

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        web_bg : config.theme_color.web.background,
        hero_title : config.theme_color.hero_section.title,
        hero_des : config.theme_color.hero_section.description,
        profile_bg_top : config.theme_color.profile_section.card_gradient.top,
        profile_bg_middle : config.theme_color.profile_section.card_gradient.middle,
        profile_bg_bottom : config.theme_color.profile_section.card_gradient.bottom,
        profile_con_top : config.theme_color.profile_section.main_cotnainer_gradient.top,
        profile_con_middle : config.theme_color.profile_section.main_cotnainer_gradient.middle,
        profile_con_bottom : config.theme_color.profile_section.main_cotnainer_gradient.bottom,
        profile_content_con_top : config.theme_color.profile_section.content_container_gradient.top,
        profile_content_con_bottom : config.theme_color.profile_section.content_container_gradient.bottom,
        profile_name : config.theme_color.profile_section.text.name,
        profile_hash_tag : config.theme_color.profile_section.text.hash_tag,
        profile_status : config.theme_color.profile_section.text.status,
        profile_content_con_division : config.theme_color.profile_section.text.division_line,
        profile_section_title : config.theme_color.profile_section.text.section_title,
        profile_section_description_major : config.theme_color.profile_section.text.section_description_major,
        profile_section_description_minor : config.theme_color.profile_section.text.section_description_minor,
        hero_button_bg : config.theme_color.hero_section.buttons.background,
        hero_button_lb : config.theme_color.hero_section.buttons.label,
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

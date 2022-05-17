import {
  FolderOpenOutlined,
  HomeOutlined,
  ReadOutlined,
  TrophyOutlined
} from '@ant-design/icons'

export const menu = [
  {
    name: 'Home',
    path: '/auth/home',
    icon: <HomeOutlined />
  },
  {
    name: 'Courses',
    path: '/auth/course',
    icon: <FolderOpenOutlined />
  },
  {
    name: 'Lessons',
    path: '/auth/lesson',
    icon: <ReadOutlined />
  },
  {
    name: 'Quiz',
    path: '/auth/quiz',
    icon: <TrophyOutlined />
  }
]

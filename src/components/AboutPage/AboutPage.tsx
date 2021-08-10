import React from 'react';
import {Link} from "react-router-dom";
import {Typography, Breadcrumbs} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
    }),
);

export function AboutPage() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                </Breadcrumbs>
            </div>
            <Typography variant="h3">
                About App
            </Typography>
            <div className={classes.title}>
                <h3>
                    Лучшие книги
                </h3>
                <p>
                    Книги – одно из величайших наследий человечества. И если до изобретения книгопечатания книги
                    были доступны лишь избранной касте людей, то потом книги начали распространяться повсеместно.
                    В каждом новом поколении рождались талантливые писатели, которые создавали мировые шедевры
                    литературы.
                </p>
                <p>
                    Великие произведения дошли и до нас, вот только мы всё меньше читаем классику.
                    Литературный портал Букля представляет вашему вниманию 100 лучших книг всех времен и народов,
                    которые обязательно надо прочесть. В этом списке вы найдете не только классические произведения,
                    но и современные книги, которые оставили свой след в истории совсем недавно.
                </p>
            </div>
        </div>
    )
}

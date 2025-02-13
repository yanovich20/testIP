<head>
<link href="/styles.css" rel="stylesheet"/>
<script src="/script.js" type="text/javascript"></script>
    </head>
    <body>
<table>
    <thead>
    <tr>
        <th>
                колонка 1
        </th>
        <th>
                колонка 2
        </th>
        <th>
                колонка 3
        </th>
        <th>
                колонка 4
        </th>
        <th>
                колонка 5
        </th>
    </tr>
</thead>
<tbody>
<?php
    for($index =0;$index<5;$index++){
        ?>
        <tr>
            <?php for($jndex=0;$jndex<5;$jndex++){
                ?>
                <td>
                    <?php echo rand(0,1); ?>
            </td>
                <?
            }
            ?>
        </tr>
        <?
    }
?>
</tbody>
</table>
<button class="btn button-1">кнопка 1</button>
<button class="btn button-2">кнопка 2</button>
<button class="btn button-3">кнопка 3</button>
</body>